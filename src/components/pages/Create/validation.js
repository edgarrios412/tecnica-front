const validation = (recipe) => {
    const errors = {};
  
    const imgRegexp =
      /^https?:\/\/(?:[a-z-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpe?g|gif|png)$/i
  
      // VALIDANDO TITULO
    if (!recipe.title) {
      errors.title = "Debes colocar un titulo";
    } else {
      if (recipe.title.length < 6) {
        errors.title = "El titulo debe tener mas de 5 caracteres";
      }
    }
  
    if (!recipe.summary) {
      errors.summary = "Debes colocar un summary";
    } else {
      if (recipe.summary.length < 21) {
        errors.summary = "El summary debe tener al menos 20 caracteres";
      }
    }
    if (!recipe.image) {
        // if (recipe.image == null) {
            errors.image = "Debes colocar una imagen de portada";
        //   }
    }
  
    if (recipe.genres.length < 1) {
      errors.genres = "Debes seleccionar al menos 1 genero";
    }

    if(recipe.lang.length == 0){
        errors.lang = "Debes colocar un lenguaje";
    }
  
    return errors;
  };
  
  export default validation;
  