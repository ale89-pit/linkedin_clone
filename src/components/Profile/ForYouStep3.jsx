const ForYouStep3 = () => {
  return (
    <div className="border rounded p-4">
      <div className="d-flex align-items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48.11"
          height="48.03"
          viewBox="0 0 48.11 48.03"
          id="camera-small"
          data-supported-dps="48x48"
          className="me-3"
        >
          <path
            d="M46.05 8H30.57L28 4.75A2.35 2.35 0 0026.28 4h-4.46a2.39 2.39 0 00-1.7.73L17.05 8h-15a2.44 2.44 0 00-2 2v30a2.42 2.42 0 002 2h44a2.4 2.4 0 002-2V10a2.42 2.42 0 00-2-2z"
            fill="#56687a"
          />
          <path fill="#788fa5" d="M.05 10.02h48v30h-48z" />
          <path fill="#fdc2b1" d="M.05 15.02h48v20h-48z" />
          <path d="M24.05 13a12 12 0 1012 12 12 12 0 00-12-12z" fill="#fff" />
          <path
            d="M24.05 15a10 10 0 1010 10 10 10 0 00-10-10z"
            fill="#56687a"
          />
          <path d="M24.05 19a6 6 0 106 6 6 6 0 00-6-6z" fill="#1d2226" />
          <circle cx="24.05" cy="25.02" r="2" fill="#f9fafb" />
        </svg>
        <h5 className="d-inline-block">
          Aggiungi una foto al tuo profilo per aiutare gli altri a riconoscerti
        </h5>
      </div>
      <p>
        Gli utenti con una foto del profilo ricevono fino a 2,3 volte più
        visualizzazioni del profilo.
      </p>
      <button className="btn rounded-pill border border-dark">
        Aggiungi foto
      </button>
    </div>
  );
};

export default ForYouStep3;
