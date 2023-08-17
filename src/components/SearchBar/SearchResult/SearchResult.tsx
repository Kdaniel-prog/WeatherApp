import React from "react";
import SearchResultProps from "./SearchResultProps";
import "./SearchResult.css";

const SearchResult = (props: SearchResultProps) => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = event.target as HTMLOptionElement;
        console.log(target);
        const value = target.text;
        console.log('asd')
        props.onResult(value);
    };
  
    return (
        <div className="result-wrapper">
        {props.cities.length != 0 ? (
            <div className="search-result-wrapper">
            {props.cities.map((item, index) => {
                return (
                <option key={index} className="search-result" onClick={handleClick}>
                    {item.name}
                </option>
                );
            })}
            </div>
        ) : props.isLoading ? (
            <div className="search-result-wrapper">
            <p className="loading-text">Loading...</p>
            </div>
        ) : !props.isEmpty && props.searchValue.length > 0 ? (
            <div className="search-result-wrapper">
            <p className="loading-text">No result</p>
            </div>
        ) : (
            <div></div>
        )}
        </div>
    );
};

export default SearchResult;
