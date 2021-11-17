export default function card() {
    var arr = [{ id: 1, name: "nirveek naskar" },
                { id: 2, name: "sourav mondal" },
                { id: 3, name: "anupam datta" },
            ]
    var x = {
        "maxWidth": "20rem"
    }
    return (
        <>
            {
                arr.map((user) => (
                    <div className="card border-success mb-3" style={x} key={user.id}>
                        <div className="card-header">{user.name}</div>
                        <div className="card-body">
                            <h4 className="card-title">Success card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                ))}
        </>
    )
}

