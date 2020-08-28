import React from "react";

function Search({ onChange }) {
    return (
        <div>
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    onChange={onChange}
                />
            </form>
        </div>
    );
}
export default Search;
