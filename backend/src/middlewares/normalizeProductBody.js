const normalizeProductBody = (req, res, next) => {
    if (req.body) {
        const arrayFields = ["tag", "brand", "category", "type"];

        arrayFields.forEach((field) => {
            if (typeof req.body[field] === "string") {
                req.body[field] = req.body[field]
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean);
            } else if (!Array.isArray(req.body[field])) {
                req.body[field] = [];
            }
        });

        if (typeof req.body.moq === "string") {
            req.body.moq = Number(req.body.moq);
        }

        if (!req.body.image) {
            req.body.image = [];
        }
    }

    next();
};

export default normalizeProductBody;
