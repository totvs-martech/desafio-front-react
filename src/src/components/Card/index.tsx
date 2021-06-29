import Link from 'next/link';

type CharacterData = {
  name: string;
  id?: number;
  thumbnail?: string;
  thumbnailExtension?: string;
}

export default function Card(props: CharacterData){
  return(
    <div className="col">
      <div className="card shadow-sm"> 
       {(props.thumbnail && props.thumbnailExtension) && 
          <img 
            className={props.thumbnail?.includes('image_not_available') 
            ? "bd-placeholder-img card-img-top image-not-available" 
            : "bd-placeholder-img card-img-top"}
            width="100%" 
            alt={props.name}
            src={`${props.thumbnail}.${props.thumbnailExtension}`} 
          />
       }
        <div className="card-body">
          <h5>{props.name}</h5>
          <div className="d-grid gap-2">
            <Link href={{
              pathname: '/character/',
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