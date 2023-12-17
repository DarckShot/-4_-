/*export const createBloggingItemTemplate = ({
    src, 
    description, 
    header,
    href, title
}) => {
    return `
        <figure class = blogging_left_item>
        <img class = "blogging_left_img" src = "${src}"/>
        <div class = "blogging_text">
            <p class = "blogging_date"> ${description} </p>
            <h3 class = "blogging_header"> ${header} </h3>
            <a href = "${href}" class = "blogging_cta"> ${title} </a>
        </div>
        </figure>
    `;  
};

export const createBloggingItem1Template = ({
    src, 
    description, 
    header,
    href, title
}) => {
    return `
        <figure class = blogging_right_item1>
        <img class = "blogging_right_img" src = "${src}"/>
        <div class = "blogging_text_2">
            <p class = "blogging_date"> ${description} </p>
            <h3 class = "blogging_header"> ${header} </h3>
            <a href = "${href}" class = "blogging_cta"> ${title} </a>
        </div>
        </figure>
    `;  
};

export const createBloggingItem2Template = ({
    src, 
    description, 
    header,
    href, title
}) => {
    return `
    <figure class = blogging_right_item2>
    <img class = "blogging_right_img" src = "${src}"/>
    <div class = "blogging_text_2">
        <p class = "blogging_date"> ${description} </p>
        <h3 class = "blogging_header"> ${header} </h3>
        <a href = "${href}" class = "blogging_cta"> ${title} </a>
    </div>
    </figure>
    `;  
};

export const createBloggingItem3Template = ({
    src, 
    description, 
    header,
    href, title
}) => {
    return `
    <figure class = blogging_right_item3>
    <img class = "blogging_right_img" src = "${src}"/>
    <div class = "blogging_text_2">
        <p class = "blogging_date"> ${description} </p>
        <h3 class = "blogging_header"> ${header} </h3>
        <a href = "${href}" class = "blogging_cta"> ${title} </a>
    </div>
    </figure>
    `;  
};

export const createBloggingItem4Template = ({
    src, 
    description, 
    header,
    href, title
}) => {
    return `
        <figure class = blogging_right_item4>
        <img class = "blogging_right_img" src = "${src}"/>
        <div class = "blogging_text_2">
            <p class = "blogging_date"> ${description} </p>
            <h3 class = "blogging_header"> ${header} </h3>
            <a href = "${href}" class = "blogging_cta"> ${title} </a>
        </div>
        </figure>
    `;  
};

export const bloggingTemplate = ({
    bloggingItemData,
    bloggingItem1Data,
    bloggingItem2Data,
    bloggingItem3Data,
    bloggingItem4Data,
}) => {
    const bloggingItemTemplate = createBloggingItemTemplate(bloggingItemData);
    const bloggingItem1Template = createBloggingItem1Template(bloggingItem1Data);
    const bloggingItem2Template = createBloggingItem2Template(bloggingItem2Data);
    const bloggingItem3Template = createBloggingItem3Template(bloggingItem3Data);
    const bloggingItem4Template = createBloggingItem4Template(bloggingItem4Data);

    const resultTemplate = 
        bloggingItemTemplate + bloggingItem1Template + bloggingItem2Template + bloggingItem3Template + bloggingItem4Template;

        return resultTemplate;
};*/





export const createBloggingItemTemplate = ({
    src,
    description,
    header,
    href,
    title,
    className
}) => {
    return `
        <figure class="${className}">
            <img class="${className.includes('left') ? 'blogging_left_img' : 'blogging_right_img'}" src="${src}"/>
            <div class="${className.includes('left') ? 'blogging_text' : 'blogging_text_2'}">
                <p class="blogging_date"> ${description} </p>
                <h3 class="blogging_header"> ${header} </h3>
                <a href="${href}" class="blogging_cta"> ${title} </a>
            </div>
        </figure>
    `;
};

export const bloggingTemplate = (bloggingData) => {
    let resultTemplate = '';

    for (const key in bloggingData) {
        if (Object.hasOwnProperty.call(bloggingData, key)) {
            const template = createBloggingItemTemplate({
                ...bloggingData[key],
                className: key,
            });

            resultTemplate += template;
        }
    }

    return resultTemplate;
};
