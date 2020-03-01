import React from 'react';
import { MainMenu } from "./mainMenu";


const PageTemplate = ({children}) =>
    <div className="Page">
        <MainMenu />
        {children}
    </div>


export  const Home = () =>
    <PageTemplate>
        <section>
            <div>Home</div>
        </section>
    </PageTemplate>

export const Knowledge  =  () =>
    <PageTemplate>
        <section>
            <div>[Knowledge]</div>
        </section>
    </PageTemplate>

export const Work = () => 
    <PageTemplate>
        <section>
            <div>[Work]</div>
        </section>
    </PageTemplate>

export const  About = () => 
    <PageTemplate>
        <section>
            <div>[About]</div>
        </section>
    </PageTemplate>

export const Whoops404 = ({location}) => 
    <PageTemplate>
        <div>
            <h1>Resource not found at `${location.pathname}`</h1>
        </div> 
    </PageTemplate>