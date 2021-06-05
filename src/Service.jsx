import React from 'react';
import Card from './Card';
import Data from './ServiceData';
const Service = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <h1 className="text-center">Our Services</h1>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                    
                          {Data.map((val,index)=>{
                              return <Card
                              key={index}
                                src={val.src}
                                title={val.title}
                              />
                          })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;