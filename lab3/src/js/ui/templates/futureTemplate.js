export const createFutureHeader = ({header, title}) => {
    return`
        <h2 class = "future_header_text"> ${header} </h2>
        <button class = "future_header_button"> ${title} </button>
    `;
};

export  const createFutureContentText = ({src, description}) => {
    return`
        <img class = "future_content_left_img" src = "${src}">
        <p class="future_content_left_text"> ${description} </p>
    `;
};

export const createFutureHeaderText1 = ({ header }) => {
    return `
        <h3 class = "future_content_header"> ${header} </h3>
    `;
};

export const createFutureContentText1 = ({
    href, title,
}) => {
    return`
        <a href = ${href} class = "future_content_cta"> ${title} </a>
    `;
};

export const futureTemplate = ({
    headerData, 
    contentTextData, 
    contentText1Data,
    headerText1Data,
    headerText2Data,
    headerText3Data,
    contentText2Data,
    contentText3Data,
}) => {
    const headerTemplate = createFutureHeader(headerData);
    const contenTextTemplate = createFutureContentText(contentTextData);
    const headerText1Template = createFutureHeaderText1(headerText1Data);
    const contentText1Template = contentText1Data
    .map((item) => createFutureContentText1(item))
    .join("");

    const headerText2Template = createFutureHeaderText1(headerText2Data);
    const contentText2Template = contentText2Data
    .map((contentText2) => createFutureContentText1(contentText2))
    .join("");

    const headerText3Template = createFutureHeaderText1(headerText3Data);
    const contentText3Template = contentText3Data
    .map((contentText3) => createFutureContentText1(contentText3))
    .join("");

    const resultTemplate = `
        <div class = "future_header">
            ${headerTemplate}
        </div>
        <section class = "section future_content">
            <div class = "future_content_text">
                ${contenTextTemplate}
            </div>
            <div class = "future_content_text1">
                ${headerText1Template}
                ${contentText1Template}
            </div>
            <div class = "future_content_text2">
                ${headerText2Template}
                ${contentText2Template}
            </div>
            <div class = "future_content_text">
                ${headerText3Template}
                ${contentText3Template}
            </div>
        </section>
    `;
    return resultTemplate;
};

