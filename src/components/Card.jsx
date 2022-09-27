function Card(props) {
    return(
        <section>
            <div>
                <img src={props.imageUrl} alt="" />
            </div>

            <div>
                <span>{props.location}</span> <a href={props.googleMapsUrl}>View on Google Maps</a>
                <h1>{props.title}</h1>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>

        </section>
    )
}

export default Card