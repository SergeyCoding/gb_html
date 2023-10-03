/**
 *
 * @returns { [{blogId: string, title: string, content: string, tags: [string]}] }
 */
export function getBlogs() {
  return [
    {
      blogId: '101',
      title: 'Let’s Get Solution for Building Construction Work',
      content: `
            <div class="bdp-blog__img">
              <img src="${require('@/assets/img/blog-details-img01.png')}" alt="" />
            </div>
            <div class="bdp-blog__date">
              <p>26 December,2022</p>
              <p>Interior / Home / Decore</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
              belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injecthumour, or randomised words which don't look even slightly
              believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary.
            </p>
            <div class="blog__quotes">
              <p>“</p>
              <p>The details are not the details. They make the design.</p>
            </div>
            `,
      tags: ['Kitchen'],
    },
    {
      blogId: '102',
      title: 'Design sprints are great',
      content: ` <p>
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
        belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
      </p>
      <div class="text-reference">
        <p>1</p>
        <p>
          Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered.
        </p>
      </div>
      <div class="text-reference">
        <p>2</p>
        <p>
          Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered.
        </p>
      </div>
      <div class="text-reference">
        <p>3</p>
        <p>
          Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered.
        </p>
      </div>
      <div class="bdp-blog__img">
        <img src="${require('@/assets/img/blog-details-img02.png')}" alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
        belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
      </p>`,
      tags: ['Kitchen'],
    },
    { blogId: '103', title: 'title 103', content: 'content 103', tags: ['Bedroom'] },
    { blogId: '104', title: 'title 104', content: 'content 104', tags: ['Bedroom'] },
    { blogId: '105', title: 'title 105', content: 'content 105', tags: ['Building', 'Bedroom'] },
    { blogId: '106', title: 'title 106', content: 'content 106', tags: ['Architecture'] },
    { blogId: '107', title: 'title 107', content: 'content 107', tags: ['Kitchen Planning'] },
    { blogId: '108', title: 'title 108', content: 'content 108', tags: ['Kitchen Planning'] },
    { blogId: '109', title: 'title 109', content: 'content 109', tags: ["Children's Room"] },
    { blogId: '110', title: 'title 110', content: 'content 110', tags: ["Children's Room"] },
    // { blogId: '111', title: 'title 111', content: 'content 111', tags: ["Children's Room", '111'] },
  ];
}

export function getTags() {
  const result = ['Kitchen'];

  const blogs = getBlogs();
  for (let i = 0; i < blogs.length; i++) {
    blogs[i].tags.forEach((x) => {
      if (!result.includes(x)) {
        result.push(x);
      }
    });
  }

  return result;
}

/**
 *
 * @param {string} tag
 */
export function getBlogsByTag(tag) {
  return getBlogs().filter((x) => x.tags.includes(tag));
}
