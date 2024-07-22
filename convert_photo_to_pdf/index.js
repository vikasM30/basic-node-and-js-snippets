const imagesToPdf = require("images-to-pdf")
const imageList1 = [
'./IMG_20220809_231141.jpg',
'./IMG_20220809_231154.jpg',
'./IMG_20220809_231202.jpg',
'./IMG_20220809_231215.jpg',
'./IMG_20220809_231224.jpg',
'./IMG_20220809_231231.jpg',
'./IMG_20220809_231237.jpg',
'./IMG_20220809_231244.jpg',
'./IMG_20220809_231251.jpg',
'./IMG_20220809_231258.jpg',
'./IMG_20220809_231307.jpg',
'./IMG_20220809_231314.jpg',
'./IMG_20220809_231321.jpg',
'./IMG_20220809_231327.jpg',
'./IMG_20220809_231332.jpg',
'./IMG_20220809_231339.jpg',
'./IMG_20220809_231352.jpg',
]
const imageList2 = [
    './IMG_20220809_225710.jpg',
    './IMG_20220809_225722.jpg',
    './IMG_20220809_225728.jpg',
    './IMG_20220809_225736.jpg',
    './IMG_20220809_225741.jpg',
    './IMG_20220809_225747.jpg',
    './IMG_20220809_225752.jpg',
    './IMG_20220809_225757.jpg',
    './IMG_20220809_225803.jpg',
    './IMG_20220809_225808.jpg',
    './IMG_20220809_225815.jpg',
    './IMG_20220809_225820.jpg',
    './IMG_20220809_225828.jpg',
    './IMG_20220809_225834.jpg',
    './IMG_20220809_225839.jpg',
    './IMG_20220809_225845.jpg',
    './IMG_20220809_225852.jpg',
]
const func = async (imageList, path) => {
    await imagesToPdf(imageList, path);
};

// func(imageList1, path);
func(imageList2, './home_registry_545.pdf');
// await imagesToPdf(["path/to/image1.jpg", "path/to/image2.png"], "./combined.pdf")
