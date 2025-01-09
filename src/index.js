import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import {QueryClient , QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
 
 
const root = ReactDOM.createRoot(document.getElementById('root'));

let quary = new QueryClient()
root.render(

   
     
            <QueryClientProvider client={quary}>
                <App />
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        
    
   
    
);

 