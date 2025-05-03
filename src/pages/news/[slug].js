import Breadcrumb from "@/components/Global/Breadcrumb";
import PostDetail from "@/components/PostDetail/PostDetail";
import { GetNewsBySlug } from "@/service/newsService";
import Head from "next/head";
import { useParams } from "next/navigation";
import { getDirectusImageUrl } from "../../../lib/helpers";

// Server-side code
export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const post_res = await GetNewsBySlug(slug);
    const post = post_res.data.data[0];

    // if (!post) {
    //   // Redirect to home page
    //   return {
    //     redirect: {
    //       destination: "/",
    //       permanent: false,
    //     },
    //   };
    // }

    return {
      props: { slug, post },
    };
  } catch (error) {
    
    console.error(error.response.data);
    return {
      notFound: true,
    };
  }
}

function NewsDetails({ post }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post?.author?.name || "Team Beliefcentre",
    },
    datePublished: post.date_created,
    dateModified: post.date_created,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://beliefcentre.com/news/${post.slug}`,
    },
    image: getDirectusImageUrl(post.featured_image.id),
  };

  // Add FAQ schema if FAQ exists
  if (post.faq && post.faq.length > 0) {
    schemaData["mainEntity"] = {
      "@type": "FAQPage",
      mainEntity: post.faq.map((faqItem) => ({
        "@type": "Question",
        name: faqItem.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faqItem.answer,
        },
      })),
    };
  }
  return (
    <>
      <Head>
        <title>{post?.meta_title || post.title}</title>
        <meta name="description" content={post?.meta_description || post.description} />
        {post?.meta_keywords && <meta name="keywords" content={post?.meta_keywords} />}
        <link rel="canonical" href={`https://beliefcentre.com/news/${post.slug}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={post?.meta_title || post.title} />
        <meta property="og:description" content={post?.meta_description || post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://beliefcentre.com/news/${post.slug}`} />
        <meta property="og:image" content={getDirectusImageUrl(post.featured_image.id)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post?.meta_title || post.title} />
        <meta name="twitter:description" content={post?.meta_description || post.description} />
        <meta name="twitter:image" content={getDirectusImageUrl(post.featured_image.id)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>
      <div className="bg-gray-50 pt-10">
        <PostDetail post={post} />
      </div>
    </>
  );
}

export default NewsDetails;
