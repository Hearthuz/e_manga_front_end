import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

function Addbook({ className }) {
    const [data, setData] = useState();

    const handleChange = (e) => {
        setData(e.target.value[0]);
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post('http://localhost:8080/manga/', {
            name: e.target.title.value,
            author: e.target.author.value,
            seriesName: e.target.series.value,
            published: e.target.published.value,
            publisher: e.target.publisher.value,
            price: e.target.price.value,
            page: e.target.page.value,
            imageURL: e.target.imgURL.value,
            synopsis: e.target.synopsis.value,
        }).then((response) => {
            console.log(response);
            alert("Add Complete");
            window.location.href = "/bookArchive";
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className={className}>
            <NavbarAdmin />
            <form onSubmit={SubmitHandler}>
                <div class="notification">
                    <div>
                        <h1 class="row header py-5 fw-bolder d-flex justify-content-center">Add New Book</h1>
                        <div class="flex-color  rounded-4 shadow m-2">
                            <div class="manga-box position-relative">
                                <div class="container-fluid p-0 m-0">
                                    <div class="row p-4 ">
                                        <div class="d-flex m-4">
                                            <div class="container-fluid  fs-5 me-4 border-bottom border-3 border-dark pb-2"></div>
                                        </div>
                                        <div class="col-12 col-md-3">
                                            <img src="https://findicons.com/files/icons/2799/flat_icons/128/book_add.png" class="card-img-top" alt="..." />
                                        </div>
                                        <div class="col-12 col-md-9">

                                            <div class="d-flex m-4">
                                                <div class="  fs-4 me-5">Book Name</div>
                                            </div>
                                            <div class="d-flex m-4 ">
                                                <input type="text" class=" container-fluid  fs-5 me-4" placeholder='Book Name' id='title' required></input>
                                            </div>

                                            <div class="d-flex m-4">
                                                <div class="  fs-5 me-4">Name Series</div>
                                            </div>
                                            <div class="d-flex m-4">
                                                <input type="text" class="container-fluid  fs-5 me-4" placeholder='Name Series' id='series' required></input>
                                            </div>

                                            <div class="d-flex m-4">
                                                <div class="  fs-5 me-4">Author</div>
                                            </div>
                                            <div class="d-flex m-4">
                                                <input type="text" class="container-fluid  fs-5 me-4" placeholder='Author Name' id='author' required></input>
                                            </div>

                                            <div class="d-flex m-4">
                                                <div class="  fs-5 me-4">Published </div>
                                            </div>
                                            <div class="d-flex m-4">
                                                <input type="date" class="container-fluid  fs-5 me-4" placeholder='Published' id='published' required></input>
                                            </div>

                                            <div class="d-flex m-4">
                                                <div class="  fs-5 me-5">Publisher</div>
                                            </div>
                                            <div class="d-flex m-4">
                                                <input type="text" class="container-fluid  fs-5 me-4" placeholder='Publisher Name' id='publisher' required></input>
                                            </div>

                                            <div class="d-flex m-4">
                                                <div class="  fs-5 me-5">Price</div>
                                            </div>
                                            <div class="d-flex m-4">
                                                <input type="text" class="container-fluid  fs-5 me-4" placeholder='Price' id='price' required></input>
                                            </div>
                                            <div class="d-flex m-4">
                                                <div class="  fs-5 me-5">Pages</div>
                                            </div>
                                            <div class="d-flex m-4">
                                                <input type="text" class="container-fluid  fs-5 me-4" placeholder='Pages' id='page' required></input>
                                            </div>
                                            <div class="d-flex m-4">
                                                <div class="  fs-5 me-5">ImagesURL</div>
                                            </div>
                                            <div class="d-flex m-4">
                                                <input type="text" class="container-fluid  fs-5 me-4" placeholder='Link Image' id='imgURL' required></input>
                                            </div>

                                            <div class="d-flex m-4">
                                                <div class="  fs-5 me-5">Synopsis</div>
                                            </div>
                                            <div class="d-flex m-4">
                                                <input type="text" class="container-fluid  fs-5 me-4" placeholder='Synopsis' id='synopsis' required></input>
                                            </div>

                                            <div class="d-flex m-4">

                                            </div>


                                            <div class="d-flex m-4">
                                                <button type="submit" class="btn btn-success btn-sm me-1">Confirm</button>
                                                <button type="button" class="btn btn-danger btn-sm me-1">Cancel</button>
                                            </div>
                                        </div>
                                        <div class="d-flex m-4">
                                        </div>
                                        <div class="col-1  ">
                                        </div>


                                        <div class="d-flex m-4">
                                            <div class="container-fluid  fs-5 me-4 border-bottom border-3 border-dark pb-2"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

Addbook.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(Addbook)`
.carousel-item{
    height: 32rem;
}
.notification{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
}
.notification h1{
    color: #ffffff;
    padding-bottom: 2rem;
}
.card-notification{
    margin:
}
.card:hover{
    filter: blur(2px);
}
.card-button{
    position: absolute;
    padding: 1rem;
    right: 0.3rem;
}
button{
    border: none;
    padding: 0.5rem;
}
.manga-box{
    
}
.favorite-button{
    margin-bottom: 0.5rem;
    background: #ff6961;
}
.flex-color{
    background: #d9d9d9;
}
flex-container{
display: flex;
height: 20rem;
align-items: center;
}
.detailFrame{
    background-color: #d9d9d9;
}
.newTag{
font-size: 40px;
color: #8758FF;
}
.backTag{
    color: #8758FF;
.header{
    color : #f5f5f5;
    font-size : 4rem;
}
.dataBlock{
    width : 50rem;
    overflow : auto;
}
.cart-Item{
}
input {
    height: 2rem;
    width: 2rem;
    background-color: #eee;
}
.bookCover {
    width: 100%;
}
.checkBoxCol{
    height :100%;
}
.delBtnCol{
    height :100%;
}
.selectAll{
    font-size :1.5rem;
    color : #eeeeee;
}

`