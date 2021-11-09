export default {
  name: 'blog',
  title: 'blog',
  type: 'document',
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      options: {
        source: 'title',
        maxLength: 96,
      }
    },
    {
      title: "Date",
      name: "date",
      type: "date"
    },
    {
      title: "Url",
      name: "url",
      type: "string"
    },
    {
      title: "Subject",
      name: "subject",
      type: "string"
    },
    {
      title: "Author",
      name: "author",
      type: "string"
    },
    {
      title: "Views",
      name: "views",
      type: "string"
    },
    {
      title: "Likes",
      name: "likes",
      type: "string"
    },
    {
      title: "Blog Image 1",
      name: "blogimage1",
      type: "image"
    },
    {
      title: "Blog Image 2",
      name: "blogimage2",
      type: "image"
    },
    {
      title: "Blog Summary",
      name: "blogsummary",
      type: "string"
    },
    {
      title: "Author Image",
      name: "authorimage",
      type: "image"
    },
    {
      title: "Author Introduction",
      name: "authorintroduction",
      type: "string"
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: 'string' }]
    },
    {
      title: "Facebook",
      name: "facebook",
      type: "string"
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "string"
    },
    {
      title: "Linkedin",
      name: "linkedin",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      type: "string"
    },
    {
      title: "Highlight",
      name: "highlight",
      type: "string"
    },
    {
      title: "Conclusion",
      name: "conclusion",
      type: "string"
    },
    {
      title: "Paragraph Title 1",
      name: "ptitle1",
      type: "string"
    },
    {
      title: "Short Description  1",
      name: "pdesc1",
      type: "string"
    },
    {
      title: "Long Description  1",
      name: "pdescription1",
      type: "string"
    },
    {
      title: "Paragraph Image  1",
      name: "pimage1",
      type: "image"
    },
    {
      title: "Paragraph Title 2",
      name: "ptitle2",
      type: "string"
    },
    {
      title: "Short Description  2",
      name: "pdesc2",
      type: "string"
    },
    {
      title: "Long Description  2",
      name: "pdescription2",
      type: "string"
    },
    {
      title: "Paragraph Image  2",
      name: "pimage2",
      type: "image"
    },
    {
      title: "Paragraph Title 3",
      name: "ptitle3",
      type: "string"
    },
    {
      title: "Short Description  3",
      name: "pdesc3",
      type: "string"
    },
    {
      title: "Long Description  3",
      name: "pdescription3",
      type: "string"
    },
    {
      title: "Paragraph Image  3",
      name: "pimage3",
      type: "image"
    },
    {
      title: "Paragraph Title 4",
      name: "ptitle4",
      type: "string"
    },
    {
      title: "Short Description  4",
      name: "pdesc4",
      type: "string"
    },
    {
      title: "Long Description  4",
      name: "pdescription4",
      type: "string"
    },
    {
      title: "Paragraph Image  4",
      name: "pimage4",
      type: "image"
    },
    {
      title: "Paragraph Title 5",
      name: "ptitle5",
      type: "string"
    },
    {
      title: "Short Description  5",
      name: "pdesc5",
      type: "string"
    },
    {
      title: "Long Description  5",
      name: "pdescription5",
      type: "string"
    },
    {
      title: "Paragraph Image  5",
      name: "pimage5",
      type: "image"
    },
    {
      title: "Paragraph Title 6",
      name: "ptitle6",
      type: "string"
    },
    {
      title: "Short Description  6",
      name: "pdesc6",
      type: "string"
    },
    {
      title: "Long Description  6",
      name: "pdescription6",
      type: "string"
    },
    {
      title: "Paragraph Image  6",
      name: "pimage6",
      type: "image"
    },
    {
      title: "Paragraph Title 7",
      name: "ptitle7",
      type: "string"
    },
    {
      title: "Short Description  7",
      name: "pdesc7",
      type: "string"
    },
    {
      title: "Long Description  7",
      name: "pdescription7",
      type: "string"
    },
    {
      title: "Paragraph Image  7",
      name: "pimage7",
      type: "image"
    },
    {
      title: "Paragraph Title 8",
      name: "ptitle8",
      type: "string"
    },
    {
      title: "Short Description  8",
      name: "pdesc8",
      type: "string"
    },
    {
      title: "Long Description  8",
      name: "pdescription8",
      type: "string"
    },
    {
      title: "Paragraph Image  8",
      name: "pimage8",
      type: "image"
    },
    {
      title: "Paragraph Title 9",
      name: "ptitle9",
      type: "string"
    },
    {
      title: "Short Description  9",
      name: "pdesc9",
      type: "string"
    },
    {
      title: "Long Description  9",
      name: "pdescription9",
      type: "string"
    },
    {
      title: "Paragraph Image  9",
      name: "pimage9",
      type: "image"
    },
    {
      title: "Paragraph Title 10",
      name: "ptitle10",
      type: "string"
    },
    {
      title: "Short Description  10",
      name: "pdesc10",
      type: "string"
    },
    {
      title: "Long Description  10",
      name: "pdescription10",
      type: "string"
    },
    {
      title: "Paragraph Image  10",
      name: "pimage10",
      type: "image"
    },
    {
      title: "Paragraph Title 11",
      name: "ptitle11",
      type: "string"
    },
    {
      title: "Short Description  11",
      name: "pdesc11",
      type: "string"
    },
    {
      title: "Long Description  11",
      name: "pdescription11",
      type: "string"
    },
    {
      title: "Paragraph Image  11",
      name: "pimage11",
      type: "image"
    },
    {
      title: "Paragraph Title 12",
      name: "ptitle12",
      type: "string"
    },
    {
      title: "Short Description  12",
      name: "pdesc12",
      type: "string"
    },
    {
      title: "Long Description  12",
      name: "pdescription12",
      type: "string"
    },
    {
      title: "Paragraph Image  12",
      name: "pimage12",
      type: "image"
    },
    {
      title: "Paragraph Title 13",
      name: "ptitle13",
      type: "string"
    },
    {
      title: "Short Description  13",
      name: "pdesc13",
      type: "string"
    },
    {
      title: "Long Description  13",
      name: "pdescription13",
      type: "string"
    },
    {
      title: "Paragraph Image  13",
      name: "pimage13",
      type: "image"
    },
    {
      title: "Paragraph Title 14",
      name: "ptitle14",
      type: "string"
    },
    {
      title: "Short Description  14",
      name: "pdesc14",
      type: "string"
    },
    {
      title: "Long Description  14",
      name: "pdescription14",
      type: "string"
    },
    {
      title: "Paragraph Image  14",
      name: "pimage14",
      type: "image"
    },
    {
      title: "Paragraph Title 15",
      name: "ptitle15",
      type: "string"
    },
    {
      title: "Short Description  15",
      name: "pdesc15",
      type: "string"
    },
    {
      title: "Long Description  15",
      name: "pdescription15",
      type: "string"
    },
    {
      title: "Paragraph Image  15",
      name: "pimage15",
      type: "image"
    },
  ]
}
