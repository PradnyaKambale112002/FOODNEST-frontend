function SearchBar() {
    return (
        <section className="py-4 bg-white shadow-sm">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="input-group">

                            <span className="input-group-text bg-white">
                                🔍
                            </span>

                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Search Pizza, Burger, Biryani..."
                            />

                            <button className="btn btn-danger px-4">
                                Search
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default SearchBar;