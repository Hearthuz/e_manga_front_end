import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavbarAdmin from './NavbarAdmin';
import { BsSearch } from "react-icons/bs";

function BookArchive({ className }) {

    return (
        <div className={className}>
            <NavbarAdmin />
            <div class="bookArchive-container bg-white w-100 h-100">
                <div class="row w-100 h-100 py-5">
                    <div class="d-flex justify-content-center alignt-item-center">
                        <div class="d-flex w-50">
                            <input class="searchBox rounded" type="search" placeholder="Input Book Name Here" aria-label="Search"></input>
                            <button type="button" class="btn btn-outline-success mx-2">Search</button>
                        </div>
                    </div>
                    <div class="row p-3 resultBlock">
                        <div class="col-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="book_cover" src='https://i.pinimg.com/550x/28/19/d1/2819d12523097ccea2e541d972437128.jpg' /></div>
                        <div class="col-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="book_cover" src='https://i.pinimg.com/550x/28/19/d1/2819d12523097ccea2e541d972437128.jpg' /></div>
                        <div class="col-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="book_cover" src='https://i.pinimg.com/550x/28/19/d1/2819d12523097ccea2e541d972437128.jpg' /></div>
                        <div class="col-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="book_cover" src='https://i.pinimg.com/550x/28/19/d1/2819d12523097ccea2e541d972437128.jpg' /></div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

BookArchive.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(BookArchive)`
    .bookArchive-container{
        display: flex;
        justify-content: center;
        padding: 4rem;  
    }
    input {
        width : 100%;
    }
    .book_cover{
        width : 7rem;
    }
`