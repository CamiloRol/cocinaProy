export default function Recipes() {
    const recipes = [
      {
        "title": "Paella Valenciana",
        "description": "La auténtica receta tradicional de paella valenciana.",
        "image": "https://th.bing.com/th/id/R.b1cb3ad4d6dad2d04bc3f7c8a37ef662?rik=nn0z5fx6Uvfpog&pid=ImgRaw&r=0",
        "category": "Platos Principales",
        "time": "45 min",
      },
      {
        "title": "Tortilla Española",
        "description": "Deliciosa tortilla de patatas al estilo tradicional.",
        "image": "https://th.bing.com/th/id/OIP.fOWRmQQgEhjueANMW8k7kgHaE8?rs=1&pid=ImgDetMain",
        "category": "Entrantes",
        "time": "30 min",
      },
      {
        "title": "Gazpacho Andaluz",
        "description": "Refrescante sopa fría perfecta para el verano.",
        "image": "https://th.bing.com/th/id/OIP.dB9RW6g_PNnGgPKOwv-sQQHaEK?rs=1&pid=ImgDetMain",
        "category": "Entrantes",
        "time": "20 min",
      },
      {
        "title": "Flan de Huevo",
        "description": "Postre casero con caramelo y textura perfecta.",
        "image": "https://th.bing.com/th/id/OIP.wn3rjjMH87V8BEvV9-4YfAHaEK?rs=1&pid=ImgDetMain",
        "category": "Postres",
        "time": "60 min",
      },
      {
        "title": "Croquetas de Jamón",
        "description": "Crujientes por fuera y cremosas por dentro.",
        "image": "https://th.bing.com/th/id/OIP.DuVJTk52fGEgctmcvn6fvQHaF7?rs=1&pid=ImgDetMain",
        "category": "Entrantes",
        "time": "40 min",
      },
      {
        "title": "Arroz con Leche",
        "description": "Postre tradicional con canela y limón.",
        "image": "https://th.bing.com/th/id/OIP.2URSvL4HIYws1kGCQHsxngHaFj?rs=1&pid=ImgDetMain",
        "category": "Postres",
        "time": "35 min",
      },
    ]
  
    return (
      <section className="my-5">
        <h2 className="text-center mb-4">Recetas Destacadas</h2>
        <div className="row g-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  className="card-img-top"
                  alt={recipe.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <span className="badge bg-light text-dark mb-2">{recipe.category}</span>
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">⏱️ {recipe.time}</small>
                    <button className="btn btn-outline-primary btn-sm">Ver Receta</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary">Ver Más Recetas</button>
        </div>
      </section>
    )
  }

  
  