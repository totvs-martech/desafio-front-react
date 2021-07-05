type Title ={
  title: string;
  attributionText?: string;
}

export default function Title(props:Title) {
  return(
    <section className="py-1 text-center container-fluid section-title">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">{props.title}</h1>
          {props.attributionText && <p className="lead">{props.attributionText}</p>}
        </div>
      </div>
    </section>
  );
}