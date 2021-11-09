module.exports = {
    onPreBuild: async ({ utils, packageJson }) => {
        console.log("Starting plugin");
        //imports
        const fs = require("fs-extra");
        const toMarkdown = require("@sanity/block-content-to-markdown");
        const client = require("@sanity/client")({
            projectId: "66ra178u",
            dataset: "production",
            apiVersion: "v1",
            useCdn: true,
        });
        //add any serializers for your portable text
        const serializers = {
            types: {
                code: (props) =>
                    "```" + props.node.language + "\n" + props.node.code + "\n```",
            },
        };

        fs.readdir("./content/blog", (err, files) => {
            if (err) console.log(err);
            else {
                files.forEach((file) => {
                    console.log(`Deleting: ${file}`);
                    fs.unlink(`content/blog//${file}`, (err) => {
                        if (err) throw err;
                    });
                });
            }
        });

        try {
            await client
                .fetch(`*[_type == "blog"]{
                    _type,
                    author,
                    "authorimage": authorimage.asset->url,
                    authorintroduction,
                    "blogimage1": blogimage1.asset->url,
                    "blogimage2": blogimage2.asset->url,
                    blogsummary,
                    date,
                    facebook,
                    likes,
                    linkedin,
                    subject,
                    tags,
                    title,
                    twitter,
                    url,
                    views,
                    ptitle1,ptitle2,ptitle3,ptitle4,ptitle5,ptitle6,ptitle7,ptitle8,ptitle9,ptitle10,ptitle11,ptitle12,ptitle13,ptitle14,ptitle15,
                    pdesc1,pdesc2,pdesc3,pdesc4,pdesc5,pdesc6,pdesc7,pdesc8,pdesc9,pdesc10,pdesc11,pdesc12,pdesc13,pdesc14,pdesc15,
                    pdescription1,pdescription2,pdescription3,pdescription4,pdescription5,pdescription6,pdescription7,pdescription8,pdescription9,pdescription10,pdescription11,pdescription12,pdescription13,pdescription14,pdescription15,
                    pimage1,pimage2,pimage3,pimage4,pimage5,pimage6,pimage7,pimage8,pimage9,pimage10,pimage11,pimage12,pimage13,pimage14,pimage,15
                }`)
                .then((res) =>
                    res.map(async (post) => {
                        console.log(post)
                        //output YAML frontmatter here
                        let frontmatter = "---";
                        Object.keys(post).forEach((field) => {
                            if (Array.isArray(post[field])) {
                                frontmatter += `\n${field}: [${post[field]}]`;
                            } else {
                                frontmatter += `\n${field}: "${post[field]}"`;
                            }
                        });
                        frontmatter += "\n---\n\n";

                        const wholePost = `${frontmatter}${toMarkdown(post.body, {
                            serializers,
                        })}`;

                        const filePath = `./content/${post._type}/${post.title}.md`;
                        fs.outputFile(filePath, wholePost, function (err, data) {
                            if (err) {
                                return console.log(err);
                            }
                        });
                    })
                );
        } catch (error) {
            utils.build.failBuild("Failure message", { error });
        }
    },
};