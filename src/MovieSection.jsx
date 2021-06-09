import React, { useEffect, useState } from 'react';

import { MainWrapper, Input, HeaderWrapper, LogoSection, FilterSection, Dropdown, DetailsSection, Options, DetailSectionWrapper } from './styles';

import Logo from './logo.png'

function MovieSection() {
    const [list, setlist] = useState([]);
    const [movieDetails, setmovieDetails] = useState([]);
    const [movieSelected, setMovieSelected] = useState('');
    const [filterMovie, setfilterMovie] = useState('');
    const [background, setBackground] = useState('');
    const [displayDropDown, setdisplayDropDown] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/details/${Math.floor(Math.random() * 8) + 1}`)
            .then(response => response.json())
            .then(data => {
                let a = [];
                a.push(data)
                setmovieDetails(a);
                setBackground(a[0].imageURL);
            });
    }, []);

    const searchMovie = (input) => {
        setfilterMovie(input);
        fetch(`http://localhost:3000/movies?title_like=${input}`)
            .then(response => response.json())
            .then(data => { if (data) { setlist(data) } });
        setdisplayDropDown(true);
    }

    const displayMovieDetails = (item) => {
        setdisplayDropDown(false);
        setMovieSelected(item.title);
        setfilterMovie(item.title);
        fetch(`http://localhost:3000/details/${item.id}`)
            .then(response => response.json())
            .then(data => {
                let a = [];
                a.push(data)
                setmovieDetails(a);
                setBackground(a[0].imageURL);
            });
    }
    return (
        <MainWrapper style={{ backgroundImage: `url(${background})` }}>
            <HeaderWrapper>
                <LogoSection><img src={Logo} height="50" /></LogoSection>
                <FilterSection>
                    <Input type="search" value={filterMovie} onChange={(event) => { searchMovie(event.target.value) }} />
                    {displayDropDown && <Dropdown>
                        {list.map((item, index) => {
                            return (<Options pointer key={item.title} onClick={() => { displayMovieDetails(item) }}>{item.title}</Options>)
                        })}
                    </Dropdown>}
                </FilterSection>
            </HeaderWrapper>
            <DetailsSection>
                {movieDetails.map((x) => {
                    return (
                        <React.Fragment>
                            <DetailSectionWrapper>
                                <div>
                                    <img src={x.imageURL} width="250" />
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <Options className="heading">{movieSelected}</Options>
                                    <Options><div className="title">Starring</div><div>{x.stars}</div></Options>
                                    <Options><div className="title">Description</div><div>{x.body}</div></Options>
                                    <Options><div className="title">Year</div><div>{x.year}</div></Options>
                                </div>
                            </DetailSectionWrapper>
                        </React.Fragment>
                    )
                })}
            </DetailsSection>
        </MainWrapper>
    )
}

export default MovieSection
