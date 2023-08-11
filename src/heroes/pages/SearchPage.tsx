// import { HeroCard } from ".."

export const SearchPage = () => {
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="">
            <input 
              type="text" placeholder="Search Hero" className="form-control" name="searchText" autoComplete="off"
            />
            <button type="submit" className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search Hero
          </div>
          <div className="alert alert-danger">
            No Hero With <b>ABC</b>
          </div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  )
}
