const validation = (review) => {
    const errors = {};
  
      // VALIDANDO TITULO
    if (!review.name) {
      errors.name = "Debes colocar un nombre";
    } else {
      if (review.name.length < 3) {
        errors.name = "El nombre no puede tener menos de 3 caracteres";
      }
    }
    if (!review.content) {
        errors.content = "Debes colocar una reseña";
      } else {
        if (review.content.length < 16) {
          errors.content = "La reseña debe tener al menos 15 caracteres";
        }
      }
    return errors
}

export default validation