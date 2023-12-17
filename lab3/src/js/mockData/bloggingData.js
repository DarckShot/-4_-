/*export const bloggingItemData = 
    {
        src: "./assets/blogging/img1.png",
        description: "Сент 26, 2021",
        header: "GPT-3 и Openai - это будущее. Давай разберемся, как это",
        href: "",
        title: "Читать полную статью",
};

export const bloggingItem1Data = 
    {
        src: "./assets/blogging/img2.png",
        description: "Сент 26, 2021",
        header: "GPT-3 и Openai - это будущее. Давай разберемся, как это",
        href: "",
        title: "Читать полную статью",
};

export const bloggingItem2Data = 
    {
        src: "./assets/blogging/img3.png",
        description: "Сент 26, 2021",
        header: "GPT-3 и Openai - это будущее. Давай разберемся, как это",
        href: "",
        title: "Читать полную статью",
};

export const bloggingItem3Data = 
    {
        src: "./assets/blogging/img4.png",
        description: "Сент 26, 2021",
        header: "GPT-3 и Openai - это будущее. Давай разберемся, как это",
        href: "",
        title: "Читать полную статью",
};

export const bloggingItem4Data = 
    {
        src: "./assets/blogging/img5.png",
        description: "Сент 26, 2021",
        header: "GPT-3 и Openai - это будущее. Давай разберемся, как это",
        href: "",
        title: "Читать полную статью",
};

export const bloggingData = {
    bloggingItemData,
    bloggingItem1Data,
    bloggingItem2Data,
    bloggingItem3Data,
    bloggingItem4Data,
}; */

const generateBloggingItemLeftData = (index) => ({
    src: `./assets/blogging/left-img${index + 1}.png`,
    description: "Сент 26, 2021",
    header: "GPT-3 и Openai - это будущее. Давай разберемся, как это",
    href: "",
    title: "Читать полную статью",
});

//Количество элементов слева
const numBloggingLeftItems = 1;
//Массив элементов
const bloggingData = {};

for (let i = 0; i < numBloggingLeftItems; i++) {
    const key = `blogging_left_item`;
    bloggingData[key] = generateBloggingItemLeftData(i);
}


const generateBloggingItemRightData = (index) => ({
    src: `./assets/blogging/right-img${index + 1}.png`,
    description: "Сент 26, 2021",
    header: "GPT-3 и Openai - это будущее. Давай разберемся, как это",
    href: "",
    title: "Читать полную статью",
});

//Количество элементов справа
const numBloggingRightItems = 4;

for (let i = 0; i < numBloggingRightItems; i++) {
    const key = `blogging_right_item${i+1}`;
    bloggingData[key] = generateBloggingItemRightData(i);
}

export { bloggingData };
