import format from 'date-fns/format';

type Detalhes = {
  id: number
  title: string;
  modified: string;
  description?: string;
  thumbnail?: string;
  thumbnailExtension?: string;
  date?: string;
  dateType?: string;
  price?: number;
  priceType?: string;
}

export default function CardDetails(props:Detalhes) {
  return(
    <div className="container">
      <div className="card mb-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={`${props.thumbnail}.${props.thumbnailExtension}`}  
              className="img-fluid rounded-start" 
              alt={props.title} 
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{props.title}</h3>

              <div 
                className="card-text mb-3" 
                dangerouslySetInnerHTML={{ __html: props.description || 'No description available' }}
              />

              {props.date && (
                <p className="card-text">
                  On sale date: {format(new Date(props.date), 'MMMM d, yyyy.')}
                </p>
              )}
              
              {props.price && (
                <p className="card-text">
                  Print price: <strong>${props.price}</strong>
                </p>
              )}

              {(props.modified && !props.modified.startsWith('-')) && (
                <p className="card-text">
                  <small className="text-muted">
                    last updated on {format(new Date(props.modified), 'MMMM d, yyyy.')}
                  </small>
                </p>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}