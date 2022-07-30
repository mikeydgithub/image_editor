import React from 'react';
import './body.scss';
import { BiRotateLeft, BiRotateRight, BiMoveVertical, BiMoveHorizontal } from "react-icons/bi";
import imagePlaceHolder from "../assets/image-placeholder.svg";

const Body = () => {
  return (
    <div className="container">
        <h2>Easy Image Editor</h2>
            <div className="wrapper">
                <div className="editor-panel">
                    <div className="filter"></div>
                        <label className="title">Filters</label>
                        <div className="options">
                            <button>Brightness</button>
                            <button>Saturation</button>
                            <button>Inversion</button>
                            <button>Grayscale</button>
                        </div>
                        <div className="slider">
                            <div className="filter-info">
                                <p className="name">Brightness</p>
                                <p className="value">100%</p>
                            </div>
                            <input type="range" defaultValue="100" min="0" max="200"/>
                        </div>
                    <div className="rotate">
                        <label className="title">Rotate & Flip</label>
                        <div className="options">
                            <button><BiRotateLeft/></button>
                            <button><BiRotateRight/></button>
                            <button><BiMoveVertical/></button>
                            <button><BiMoveHorizontal/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="preview-image">
                <img src={imagePlaceHolder} alt="preview-img"/>
            </div>
        <div className="controls">
            <div className="row">
                <button className="choose-img">Choose Image</button>
                <button className="reset-filter">Save Image</button>
            </div>
        </div>
    </div>
  )
}

export default Body