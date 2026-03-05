function postValidator(req, res, next) {
  if (!req.body)
    return res.status(400).json({
      success: false,
      message: `Payload non leggibile`,
    });

  // post & put validation
  if (req.method === "POST" || req.method === "PUT") {
    const { title, content, image, tags } = req.body;

    if (!title || typeof title !== "string")
      return res.status(400).json({
        success: false,
        message: "Title non valido",
      });

    if (!content || typeof content !== "string")
      return res.status(400).json({
        success: false,
        message: "Content non valido",
      });

    if (!image || typeof image !== "string")
      return res.status(400).json({
        success: false,
        message: "Percorso immagine non valido",
      });

    if (!tags || Array.isArray(tags) === false || tags.length === 0)
      return res.status(400).json({
        success: false,
        message: "Tags non validi",
      });
  }

  // patch validation
  if (req.method === "PATCH") {
    const { title, content, image, tags } = req.body;

    if (title !== undefined)
      if (typeof title !== "string" || title === "")
        return res.status(400).json({
          success: false,
          message: "Title non valido",
        });

    if (content !== undefined)
      if (typeof content !== "string" || content === "")
        return res.status(400).json({
          success: false,
          message: "Content non valido",
        });

    if (image !== undefined)
      if (typeof image !== "string" || image === "")
        return res.status(400).json({
          success: false,
          message: "Percorso immagine non valido",
        });

    if (tags !== undefined)
      if (Array.isArray(tags) === false || tags.length === 0)
        return res.status(400).json({
          success: false,
          message: "Tags non validi",
        });
  }

  next();
}

module.exports = postValidator;
