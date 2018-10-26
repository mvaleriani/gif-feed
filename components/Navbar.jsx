import React from 'react';
import { connect } from 'react-redux';
import { setAppTab } from '../actions/uiActions'
import { relative } from 'path';

let giphyLogo = (
<svg id='giphy-logo' viewBox="0 0 129 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.83249 3.64999H0.703491V11H2.72999V8.97349H3.83249C5.39699 8.97349 6.56249 7.84999 6.56249 6.30649C6.56249 4.77349 5.39699 3.64999 3.83249 3.64999ZM3.59099 7.20949H2.72999V5.42449H3.59099C4.12649 5.42449 4.47299 5.79199 4.47299 6.31699C4.47299 6.84199 4.12649 7.20949 3.59099 7.20949Z" fill="#727272" />
    <path d="M11.1356 11.189C13.4981 11.189 15.1781 9.58249 15.1781 7.33549C15.1781 5.07799 13.4981 3.47149 11.1356 3.47149C8.77307 3.47149 7.09307 5.08849 7.09307 7.33549C7.09307 9.57199 8.77307 11.189 11.1356 11.189ZM11.1356 9.30949C10.0226 9.30949 9.19307 8.46949 9.19307 7.33549C9.19307 6.19099 10.0226 5.35099 11.1356 5.35099C12.2591 5.35099 13.0676 6.18049 13.0676 7.33549C13.0676 8.47999 12.2591 9.30949 11.1356 9.30949Z" fill="#727272" />
    <path d="M24.0671 3.64999L22.9016 7.89199L21.1166 3.69199H20.4236L18.6701 7.89199L17.4731 3.64999H15.2996L17.5991 11H19.3841L20.7701 7.46149L22.1771 11H23.9621L26.2301 3.64999H24.0671Z" fill="#727272" />
    <path d="M29.0105 9.24649V8.14399H31.4255V6.48499H29.0105V5.40349H31.6985V3.64999H26.9945V11H31.793V9.24649H29.0105Z" fill="#727272" />
    <path d="M36.9105 11H39.168L37.7085 8.33299C38.433 7.90249 38.874 7.15699 38.874 6.25399C38.874 4.72099 37.719 3.64999 36.144 3.64999H32.952V11H34.9785V8.75299H35.7135L36.9105 11ZM34.9785 5.45599H35.9025C36.4695 5.45599 36.795 5.79199 36.795 6.25399C36.795 6.70549 36.4695 7.05199 35.9025 7.05199H34.9785V5.45599Z" fill="#727272" />
    <path d="M42.0637 9.24649V8.14399H44.4787V6.48499H42.0637V5.40349H44.7517V3.64999H40.0477V11H44.8462V9.24649H42.0637Z" fill="#727272" />
    <path d="M48.9767 3.64999H46.0052V11H48.9767C51.2027 11 52.7777 9.46699 52.7777 7.32499C52.7777 5.17249 51.2027 3.64999 48.9767 3.64999ZM48.8822 9.15199H48.0422V5.50849H48.8822C49.9742 5.50849 50.6987 6.23299 50.6987 7.32499C50.6987 8.40649 49.9742 9.15199 48.8822 9.15199Z" fill="#727272" />
    <path d="M60.7568 7.12549C61.3133 6.77899 61.6808 6.19099 61.6808 5.53999C61.6808 4.44799 60.7253 3.66049 59.4233 3.66049H56.1053V11.0105H59.4968C60.8513 11.0105 61.8803 10.1075 61.8803 8.91049C61.8803 8.11249 61.4498 7.45099 60.7568 7.12549ZM59.7593 5.87599C59.7593 6.25399 59.4968 6.51649 59.0768 6.51649H58.0478V5.23549H59.0768C59.4968 5.23549 59.7593 5.48749 59.7593 5.87599ZM59.1503 9.34099H58.0478V8.00749H59.1503C59.5913 8.00749 59.8748 8.28049 59.8748 8.66899C59.8748 9.06799 59.5913 9.34099 59.1503 9.34099Z" fill="#727272" />
    <path d="M69.1173 3.64999H66.8808L65.5368 6.30649L64.1928 3.64999H61.9458L64.4973 8.12299V11H66.5553V8.13349L69.1173 3.64999Z" fill="#727272" />
    <path d="M78.002 6.76799V8.96399H81.134C80.738 9.93599 79.604 10.584 78.272 10.584C76.364 10.584 75.122 9.21599 75.122 7.21799C75.122 5.20199 76.382 3.83399 78.272 3.83399C79.55 3.83399 80.684 4.51799 81.134 5.57999H84.788C84.248 2.66399 81.548 0.593994 78.236 0.593994C74.366 0.593994 71.558 3.38399 71.558 7.21799C71.558 11.052 74.42 13.824 78.272 13.824C82.214 13.824 84.914 10.89 84.914 6.76799H78.002Z" fill="#727272" />
    <path d="M86.6552 13.5H90.1832V0.899993H86.6552V13.5Z" fill="#727272" />
    <path d="M97.9782 0.899993H92.6142V13.5H96.0882V10.026H97.9782C100.66 10.026 102.658 8.09999 102.658 5.45399C102.658 2.82599 100.66 0.899993 97.9782 0.899993ZM97.5642 7.00199H96.0882V3.94199H97.5642C98.4822 3.94199 99.0762 4.57199 99.0762 5.47199C99.0762 6.37199 98.4822 7.00199 97.5642 7.00199Z" fill="#727272" />
    <path d="M111.506 0.899993V5.45399H107.726V0.899993H104.216V13.5H107.726V8.67599H111.506V13.5H114.998V0.899993H111.506Z" fill="#727272" />
    <path d="M128.667 0.899993H124.833L122.529 5.45399L120.225 0.899993H116.373L120.747 8.56799V13.5H124.275V8.58599L128.667 0.899993Z" fill="#727272" />
</svg>);

let logo = (
    <svg width="311" height="179" viewBox="0 0 311 179" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="89.4852" y="23.3345" width="93.5513" height="93.5513" transform="rotate(45 89.4852 23.3345)" stroke="#44C6BF" stroke-width="33" />
        <rect x="221.154" y="23.3345" width="93.5513" height="93.5513" transform="rotate(45 221.154 23.3345)" stroke="#44C6BF" stroke-width="33" />
        <rect x="155.419" y="130.77" width="33.9149" height="33.9149" transform="rotate(45 155.419 130.77)" fill="#FA96C8" />
        <rect x="155.651" width="33.9149" height="33.9149" transform="rotate(45 155.651 0)" fill="#FA96C8" />
    </svg>
);

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    handleLogoClick(e){
        document.getElementById('app').scrollTo({ top: 0, behavior: 'smooth' });
    }

    render(){
        return (
            <nav id='navbar'>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div onClick={ e => this.handleLogoClick(e) } style={{position: relative, width: '180px', height: '33px', marginBottom: '5px', cursor: 'pointer'}}>
                        <svg id="logo" width="180" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.618 39.408C6.022 39.408 4.678 39.058 3.586 38.358C2.522 37.686 1.99 36.678 1.99 35.334C1.99 34.55 2.172 33.864 2.536 33.276C2.9 32.688 3.278 32.24 3.67 31.932C4.062 31.624 4.412 31.358 4.72 31.134C5.056 30.91 5.49 30.686 6.022 30.462C6.554 30.238 6.988 30.07 7.324 29.958C7.66 29.818 8.108 29.664 8.668 29.496C9.256 29.328 9.676 29.216 9.928 29.16C10.18 29.076 10.572 28.978 11.104 28.866C11.636 28.754 11.93 28.684 11.986 28.656C12.126 28.236 12.266 27.746 12.406 27.186C11.23 27.55 10.124 27.732 9.088 27.732C6.596 27.732 4.454 26.808 2.662 24.96C0.898 23.084 0.016 20.41 0.016 16.938C0.016 14.11 0.618 11.436 1.822 8.916C3.026 6.368 4.79 4.282 7.114 2.658C9.466 1.006 12.028 0.179998 14.8 0.179998C17.572 0.179998 19.854 0.823998 21.646 2.112C23.466 3.372 24.376 4.982 24.376 6.942C24.376 7.838 24.138 8.804 23.662 9.84C23.27 9.896 22.766 9.924 22.15 9.924C19.518 9.924 17.502 9.406 16.102 8.37V3.792C15.654 3.428 15.08 3.246 14.38 3.246C12.7 3.246 11.258 4.492 10.054 6.984C8.85 9.476 8.248 12.5 8.248 16.056C8.248 20.956 9.522 23.406 12.07 23.406C13.526 23.406 14.912 22.65 16.228 21.138C17.544 19.626 18.552 17.722 19.252 15.426L22.024 15.846C21.24 23.63 19.588 29.496 17.068 33.444C14.576 37.42 11.426 39.408 7.618 39.408ZM5.476 34.662C5.476 34.942 5.588 35.18 5.812 35.376C6.036 35.6 6.358 35.712 6.778 35.712C8.374 35.712 9.788 34.438 11.02 31.89L11.062 31.764C9.214 32.044 7.814 32.436 6.862 32.94C5.938 33.472 5.476 34.046 5.476 34.662ZM33.9248 24.666C33.9248 25.45 34.1068 25.842 34.4708 25.842C35.0868 25.842 35.8428 25.66 36.7388 25.296L37.6628 27.648C35.0868 29.552 32.5948 30.504 30.1868 30.504C28.7868 30.504 27.6668 30.112 26.8268 29.328C26.0148 28.516 25.6088 27.382 25.6088 25.926C25.6088 24.47 26.3228 21.18 27.7508 16.056C29.1788 10.904 29.9628 7.32 30.1028 5.304C30.1028 4.828 29.9488 4.31 29.6408 3.75C29.3328 3.19 29.0388 2.742 28.7588 2.406L28.2968 1.902L28.3808 1.062C30.1448 0.473999 33.2668 0.179998 37.7468 0.179998C38.1948 1.02 38.4188 1.916 38.4188 2.868C38.4188 4.492 37.6628 8.034 36.1508 13.494C34.6668 18.954 33.9248 22.678 33.9248 24.666ZM49.6465 0.389998L59.5585 0.641997C60.9865 0.641997 62.0925 0.613998 62.8765 0.557999C62.9605 1.062 63.0025 1.678 63.0025 2.406C63.0025 3.134 62.8065 3.694 62.4145 4.086C62.0225 4.478 61.3365 4.674 60.3565 4.674L53.9305 4.17C53.5105 4.17 53.1605 4.184 52.8805 4.212C52.8245 5.276 52.2365 8.384 51.1165 13.536C52.7125 13.396 54.3085 13.326 55.9045 13.326C57.5005 13.326 58.6625 13.452 59.3905 13.704C59.2785 14.992 59.0125 16.028 58.5925 16.812L58.3825 17.232C57.5985 16.98 56.3945 16.854 54.7705 16.854C53.1745 16.854 51.7045 16.91 50.3605 17.022C49.3245 22.034 48.8065 25.884 48.8065 28.572V29.16C47.3225 29.888 44.7185 30.252 40.9945 30.252H40.5325C40.5325 27.788 41.1485 23.644 42.3805 17.82C43.6125 11.996 44.3545 7.922 44.6065 5.598C44.6065 5.038 44.4525 4.464 44.1445 3.876C43.8365 3.26 43.5285 2.784 43.2205 2.448L42.7585 1.986L42.8425 1.02C44.9145 0.599998 47.1825 0.389998 49.6465 0.389998ZM70.7978 24.666C70.7978 25.45 70.9798 25.842 71.3438 25.842C71.9598 25.842 72.7158 25.66 73.6118 25.296L74.5358 27.648C71.9598 29.552 69.4678 30.504 67.0598 30.504C65.6598 30.504 64.5398 30.112 63.6998 29.328C62.8878 28.516 62.4818 27.382 62.4818 25.926C62.4818 24.47 63.1958 21.18 64.6238 16.056C66.0518 10.904 66.8358 7.32 66.9758 5.304C66.9758 4.828 66.8218 4.31 66.5138 3.75C66.2058 3.19 65.9118 2.742 65.6318 2.406L65.1698 1.902L65.2538 1.062C67.0178 0.473999 70.1398 0.179998 74.6198 0.179998C75.0678 1.02 75.2918 1.916 75.2918 2.868C75.2918 4.492 74.5358 8.034 73.0238 13.494C71.5398 18.954 70.7978 22.678 70.7978 24.666ZM78.1196 30.252H77.4056C77.4056 28.572 78.1896 24.288 79.7576 17.4C81.3256 10.512 82.1096 6.522 82.1096 5.43C82.1096 4.954 81.9556 4.422 81.6476 3.834C81.3676 3.246 81.0876 2.784 80.8076 2.448L80.3876 1.902L80.5136 1.062C82.2496 0.473999 85.2736 0.179998 89.5856 0.179998C90.0896 1.244 90.3416 2.448 90.3416 3.792V3.876C93.7016 1.412 96.6416 0.179998 99.1616 0.179998C100.646 0.179998 101.864 0.627998 102.816 1.524C103.768 2.392 104.244 3.652 104.244 5.304C104.244 6.928 103.6 10.218 102.312 15.174C101.024 20.13 100.38 23.154 100.38 24.246C100.38 25.31 100.562 25.842 100.926 25.842C101.43 25.842 102.186 25.66 103.194 25.296L104.076 27.69C101.332 29.566 98.7836 30.504 96.4316 30.504C95.0876 30.504 94.0516 30.154 93.3236 29.454C92.6236 28.726 92.2736 27.536 92.2736 25.884C92.2736 24.232 92.8756 21.096 94.0796 16.476C95.3116 11.828 95.9276 8.944 95.9276 7.824C95.9276 6.396 95.2976 5.682 94.0376 5.682C93.1136 5.682 91.7276 6.256 89.8796 7.404C89.6276 8.748 89.0956 11.072 88.2836 14.376C86.4916 21.908 85.5956 26.836 85.5956 29.16C84.3636 29.888 81.8716 30.252 78.1196 30.252ZM114.931 24.666C114.931 25.45 115.113 25.842 115.477 25.842C116.093 25.842 116.849 25.66 117.745 25.296L118.669 27.648C116.093 29.552 113.601 30.504 111.193 30.504C109.793 30.504 108.673 30.112 107.833 29.328C107.021 28.516 106.615 27.382 106.615 25.926C106.615 24.47 107.329 21.18 108.757 16.056C110.185 10.904 110.969 7.32 111.109 5.304C111.109 4.828 110.955 4.31 110.647 3.75C110.339 3.19 110.045 2.742 109.765 2.406L109.303 1.902L109.387 1.062C111.151 0.473999 114.273 0.179998 118.753 0.179998C119.201 1.02 119.425 1.916 119.425 2.868C119.425 4.492 118.669 8.034 117.157 13.494C115.673 18.954 114.931 22.678 114.931 24.666ZM125.486 30.294H124.52C124.52 27.97 125.178 23.728 126.494 17.568C127.81 11.408 128.538 7.726 128.678 6.522C128.846 5.29 128.944 4.366 128.972 3.75C126.34 3.806 124.24 4.212 122.672 4.968C121.86 4.044 121.356 2.686 121.16 0.893999C122.532 0.417999 124.884 0.179998 128.216 0.179998L141.446 0.599998C142.09 0.599998 143.112 0.571998 144.512 0.515999C144.624 1.412 144.68 2.168 144.68 2.784C144.68 4.1 143.854 4.758 142.202 4.758C141.698 4.758 140.9 4.674 139.808 4.506C138.744 4.338 137.806 4.24 136.994 4.212C136.91 5.108 136.182 8.748 134.81 15.132C133.466 21.516 132.794 26.206 132.794 29.202C131.562 29.93 129.126 30.294 125.486 30.294ZM158.007 37.434C156.803 38.246 155.725 38.778 154.773 39.03C153.849 39.282 152.813 39.408 151.665 39.408C150.545 39.408 149.509 39.03 148.557 38.274C147.633 37.518 147.171 36.594 147.171 35.502C147.171 34.41 147.437 33.472 147.969 32.688C148.529 31.932 149.327 31.288 150.363 30.756C152.183 29.804 154.479 29.034 157.251 28.446C157.447 27.998 157.769 26.976 158.217 25.38C157.097 25.968 155.683 26.514 153.975 27.018C152.295 27.522 150.797 27.774 149.481 27.774C148.165 27.774 147.045 27.34 146.121 26.472C145.225 25.576 144.777 24.358 144.777 22.818C144.777 21.25 145.281 18.422 146.289 14.334C147.325 10.218 147.843 7.278 147.843 5.514C147.843 4.982 147.703 4.422 147.423 3.834C147.143 3.218 146.863 2.728 146.583 2.364L146.205 1.86L146.331 1.02C148.067 0.459998 151.063 0.179998 155.319 0.179998C155.851 1.104 156.117 2.35 156.117 3.918C156.117 5.458 155.585 8.426 154.521 12.822C153.457 17.218 152.925 19.822 152.925 20.634C152.925 22.034 153.415 22.734 154.395 22.734C155.739 22.734 157.349 22.23 159.225 21.222C160.149 17.302 160.933 13.452 161.577 9.672C162.221 5.892 162.543 3.148 162.543 1.44C163.439 1.076 164.643 0.781999 166.155 0.557999C167.667 0.333998 168.913 0.221998 169.893 0.221998H170.817C170.817 2.378 170.243 6.172 169.095 11.604C168.675 13.48 168.059 16.266 167.247 19.962C166.463 23.63 165.553 26.626 164.517 28.95C163.509 31.246 162.473 33.024 161.409 34.284C160.373 35.572 159.239 36.622 158.007 37.434ZM150.279 34.746C150.279 35.362 150.685 35.67 151.497 35.67C152.309 35.67 153.205 35.194 154.185 34.242C155.165 33.318 155.865 32.366 156.285 31.386C154.661 31.638 153.247 32.072 152.043 32.688C150.867 33.332 150.279 34.018 150.279 34.746Z" fill="#FF95C9" />
                        </svg>
                        <svg id="logo-after" width="180" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.618 39.408C6.022 39.408 4.678 39.058 3.586 38.358C2.522 37.686 1.99 36.678 1.99 35.334C1.99 34.55 2.172 33.864 2.536 33.276C2.9 32.688 3.278 32.24 3.67 31.932C4.062 31.624 4.412 31.358 4.72 31.134C5.056 30.91 5.49 30.686 6.022 30.462C6.554 30.238 6.988 30.07 7.324 29.958C7.66 29.818 8.108 29.664 8.668 29.496C9.256 29.328 9.676 29.216 9.928 29.16C10.18 29.076 10.572 28.978 11.104 28.866C11.636 28.754 11.93 28.684 11.986 28.656C12.126 28.236 12.266 27.746 12.406 27.186C11.23 27.55 10.124 27.732 9.088 27.732C6.596 27.732 4.454 26.808 2.662 24.96C0.898 23.084 0.016 20.41 0.016 16.938C0.016 14.11 0.618 11.436 1.822 8.916C3.026 6.368 4.79 4.282 7.114 2.658C9.466 1.006 12.028 0.179998 14.8 0.179998C17.572 0.179998 19.854 0.823998 21.646 2.112C23.466 3.372 24.376 4.982 24.376 6.942C24.376 7.838 24.138 8.804 23.662 9.84C23.27 9.896 22.766 9.924 22.15 9.924C19.518 9.924 17.502 9.406 16.102 8.37V3.792C15.654 3.428 15.08 3.246 14.38 3.246C12.7 3.246 11.258 4.492 10.054 6.984C8.85 9.476 8.248 12.5 8.248 16.056C8.248 20.956 9.522 23.406 12.07 23.406C13.526 23.406 14.912 22.65 16.228 21.138C17.544 19.626 18.552 17.722 19.252 15.426L22.024 15.846C21.24 23.63 19.588 29.496 17.068 33.444C14.576 37.42 11.426 39.408 7.618 39.408ZM5.476 34.662C5.476 34.942 5.588 35.18 5.812 35.376C6.036 35.6 6.358 35.712 6.778 35.712C8.374 35.712 9.788 34.438 11.02 31.89L11.062 31.764C9.214 32.044 7.814 32.436 6.862 32.94C5.938 33.472 5.476 34.046 5.476 34.662ZM33.9248 24.666C33.9248 25.45 34.1068 25.842 34.4708 25.842C35.0868 25.842 35.8428 25.66 36.7388 25.296L37.6628 27.648C35.0868 29.552 32.5948 30.504 30.1868 30.504C28.7868 30.504 27.6668 30.112 26.8268 29.328C26.0148 28.516 25.6088 27.382 25.6088 25.926C25.6088 24.47 26.3228 21.18 27.7508 16.056C29.1788 10.904 29.9628 7.32 30.1028 5.304C30.1028 4.828 29.9488 4.31 29.6408 3.75C29.3328 3.19 29.0388 2.742 28.7588 2.406L28.2968 1.902L28.3808 1.062C30.1448 0.473999 33.2668 0.179998 37.7468 0.179998C38.1948 1.02 38.4188 1.916 38.4188 2.868C38.4188 4.492 37.6628 8.034 36.1508 13.494C34.6668 18.954 33.9248 22.678 33.9248 24.666ZM49.6465 0.389998L59.5585 0.641997C60.9865 0.641997 62.0925 0.613998 62.8765 0.557999C62.9605 1.062 63.0025 1.678 63.0025 2.406C63.0025 3.134 62.8065 3.694 62.4145 4.086C62.0225 4.478 61.3365 4.674 60.3565 4.674L53.9305 4.17C53.5105 4.17 53.1605 4.184 52.8805 4.212C52.8245 5.276 52.2365 8.384 51.1165 13.536C52.7125 13.396 54.3085 13.326 55.9045 13.326C57.5005 13.326 58.6625 13.452 59.3905 13.704C59.2785 14.992 59.0125 16.028 58.5925 16.812L58.3825 17.232C57.5985 16.98 56.3945 16.854 54.7705 16.854C53.1745 16.854 51.7045 16.91 50.3605 17.022C49.3245 22.034 48.8065 25.884 48.8065 28.572V29.16C47.3225 29.888 44.7185 30.252 40.9945 30.252H40.5325C40.5325 27.788 41.1485 23.644 42.3805 17.82C43.6125 11.996 44.3545 7.922 44.6065 5.598C44.6065 5.038 44.4525 4.464 44.1445 3.876C43.8365 3.26 43.5285 2.784 43.2205 2.448L42.7585 1.986L42.8425 1.02C44.9145 0.599998 47.1825 0.389998 49.6465 0.389998ZM70.7978 24.666C70.7978 25.45 70.9798 25.842 71.3438 25.842C71.9598 25.842 72.7158 25.66 73.6118 25.296L74.5358 27.648C71.9598 29.552 69.4678 30.504 67.0598 30.504C65.6598 30.504 64.5398 30.112 63.6998 29.328C62.8878 28.516 62.4818 27.382 62.4818 25.926C62.4818 24.47 63.1958 21.18 64.6238 16.056C66.0518 10.904 66.8358 7.32 66.9758 5.304C66.9758 4.828 66.8218 4.31 66.5138 3.75C66.2058 3.19 65.9118 2.742 65.6318 2.406L65.1698 1.902L65.2538 1.062C67.0178 0.473999 70.1398 0.179998 74.6198 0.179998C75.0678 1.02 75.2918 1.916 75.2918 2.868C75.2918 4.492 74.5358 8.034 73.0238 13.494C71.5398 18.954 70.7978 22.678 70.7978 24.666ZM78.1196 30.252H77.4056C77.4056 28.572 78.1896 24.288 79.7576 17.4C81.3256 10.512 82.1096 6.522 82.1096 5.43C82.1096 4.954 81.9556 4.422 81.6476 3.834C81.3676 3.246 81.0876 2.784 80.8076 2.448L80.3876 1.902L80.5136 1.062C82.2496 0.473999 85.2736 0.179998 89.5856 0.179998C90.0896 1.244 90.3416 2.448 90.3416 3.792V3.876C93.7016 1.412 96.6416 0.179998 99.1616 0.179998C100.646 0.179998 101.864 0.627998 102.816 1.524C103.768 2.392 104.244 3.652 104.244 5.304C104.244 6.928 103.6 10.218 102.312 15.174C101.024 20.13 100.38 23.154 100.38 24.246C100.38 25.31 100.562 25.842 100.926 25.842C101.43 25.842 102.186 25.66 103.194 25.296L104.076 27.69C101.332 29.566 98.7836 30.504 96.4316 30.504C95.0876 30.504 94.0516 30.154 93.3236 29.454C92.6236 28.726 92.2736 27.536 92.2736 25.884C92.2736 24.232 92.8756 21.096 94.0796 16.476C95.3116 11.828 95.9276 8.944 95.9276 7.824C95.9276 6.396 95.2976 5.682 94.0376 5.682C93.1136 5.682 91.7276 6.256 89.8796 7.404C89.6276 8.748 89.0956 11.072 88.2836 14.376C86.4916 21.908 85.5956 26.836 85.5956 29.16C84.3636 29.888 81.8716 30.252 78.1196 30.252ZM114.931 24.666C114.931 25.45 115.113 25.842 115.477 25.842C116.093 25.842 116.849 25.66 117.745 25.296L118.669 27.648C116.093 29.552 113.601 30.504 111.193 30.504C109.793 30.504 108.673 30.112 107.833 29.328C107.021 28.516 106.615 27.382 106.615 25.926C106.615 24.47 107.329 21.18 108.757 16.056C110.185 10.904 110.969 7.32 111.109 5.304C111.109 4.828 110.955 4.31 110.647 3.75C110.339 3.19 110.045 2.742 109.765 2.406L109.303 1.902L109.387 1.062C111.151 0.473999 114.273 0.179998 118.753 0.179998C119.201 1.02 119.425 1.916 119.425 2.868C119.425 4.492 118.669 8.034 117.157 13.494C115.673 18.954 114.931 22.678 114.931 24.666ZM125.486 30.294H124.52C124.52 27.97 125.178 23.728 126.494 17.568C127.81 11.408 128.538 7.726 128.678 6.522C128.846 5.29 128.944 4.366 128.972 3.75C126.34 3.806 124.24 4.212 122.672 4.968C121.86 4.044 121.356 2.686 121.16 0.893999C122.532 0.417999 124.884 0.179998 128.216 0.179998L141.446 0.599998C142.09 0.599998 143.112 0.571998 144.512 0.515999C144.624 1.412 144.68 2.168 144.68 2.784C144.68 4.1 143.854 4.758 142.202 4.758C141.698 4.758 140.9 4.674 139.808 4.506C138.744 4.338 137.806 4.24 136.994 4.212C136.91 5.108 136.182 8.748 134.81 15.132C133.466 21.516 132.794 26.206 132.794 29.202C131.562 29.93 129.126 30.294 125.486 30.294ZM158.007 37.434C156.803 38.246 155.725 38.778 154.773 39.03C153.849 39.282 152.813 39.408 151.665 39.408C150.545 39.408 149.509 39.03 148.557 38.274C147.633 37.518 147.171 36.594 147.171 35.502C147.171 34.41 147.437 33.472 147.969 32.688C148.529 31.932 149.327 31.288 150.363 30.756C152.183 29.804 154.479 29.034 157.251 28.446C157.447 27.998 157.769 26.976 158.217 25.38C157.097 25.968 155.683 26.514 153.975 27.018C152.295 27.522 150.797 27.774 149.481 27.774C148.165 27.774 147.045 27.34 146.121 26.472C145.225 25.576 144.777 24.358 144.777 22.818C144.777 21.25 145.281 18.422 146.289 14.334C147.325 10.218 147.843 7.278 147.843 5.514C147.843 4.982 147.703 4.422 147.423 3.834C147.143 3.218 146.863 2.728 146.583 2.364L146.205 1.86L146.331 1.02C148.067 0.459998 151.063 0.179998 155.319 0.179998C155.851 1.104 156.117 2.35 156.117 3.918C156.117 5.458 155.585 8.426 154.521 12.822C153.457 17.218 152.925 19.822 152.925 20.634C152.925 22.034 153.415 22.734 154.395 22.734C155.739 22.734 157.349 22.23 159.225 21.222C160.149 17.302 160.933 13.452 161.577 9.672C162.221 5.892 162.543 3.148 162.543 1.44C163.439 1.076 164.643 0.781999 166.155 0.557999C167.667 0.333998 168.913 0.221998 169.893 0.221998H170.817C170.817 2.378 170.243 6.172 169.095 11.604C168.675 13.48 168.059 16.266 167.247 19.962C166.463 23.63 165.553 26.626 164.517 28.95C163.509 31.246 162.473 33.024 161.409 34.284C160.373 35.572 159.239 36.622 158.007 37.434ZM150.279 34.746C150.279 35.362 150.685 35.67 151.497 35.67C152.309 35.67 153.205 35.194 154.185 34.242C155.165 33.318 155.865 32.366 156.285 31.386C154.661 31.638 153.247 32.072 152.043 32.688C150.867 33.332 150.279 34.018 150.279 34.746Z" fill="#FF95C9" />
                        </svg>
                    </div>
                    {giphyLogo}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({});
};
const mapDispatchToProps = dispatch => ({
   
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);