import Card from "./Card"
const Cards = () => {
    return (
      <div className="container">
        <div className="row">
        <div className="col-md-4">
            <Card/>
        </div>
        <div className="col-md-4">
            <Card/>
        </div>
        <div className="col-md-4">
            <Card/>
        </div>
        </div>
      </div>
    )
  }
export default Cards