import bwipjs from "bwip-js";

const generateBarcode = async (text) => {
    return await bwipjs.toBuffer({
        bcid: "code128",
        text: text,
        scale: 3,
        height: 10,
        includetext: false,
    });
};

export default generateBarcode;