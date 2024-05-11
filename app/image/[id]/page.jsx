import React from 'react';

const ImagePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="max-w-screen-md bg-white shadow-md rounded-md overflow-hidden">
                <div className="w-452 h-565 flex justify-center items-center">
                    <img
                        className="w-452 h-565 object-cover rounded-md"
                        src="https://via.placeholder.com/452x565"
                        alt="Image Placeholder"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImagePage;
