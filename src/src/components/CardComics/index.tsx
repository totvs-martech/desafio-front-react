import Link from 'next/link';

type ComicData = {
  title: string;
  id?: number;
  thumbnail?: string;
  thumbnailExtension?: string;
}

export default function Card(props: ComicData){
  return(
    <div className="col">
      <div className="card shadow-sm"> 
       {(props.thumbnail && props.thumbnailExtension) && 
          <img 
            className="bd-placeholder-img card-img-top" 
            width="100%"
            max-height="225" 
            alt={props.title}
            src={`${props.thumbnail}.${props.thumbnailExtension}`} 
          />
       }
        <div className="card-body">
          <h5>{props.title}</h5>
          <div className="d-grid gap-2">
            <Link href={{
              pathname: '/comic/',
              query: {
                id: props.id
              } 
            }}>
              <a 
                className="btn btn-outline-secondary" 
                type="button"
              >
                See details
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}