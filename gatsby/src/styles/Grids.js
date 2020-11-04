import styled from 'styled-components';

export const HomePageGrid = styled.div`
    display: grid;
    gap: 2rem;
    --columns: 2;
    grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
    @media (max-width: 800px) {
        --columns: 1;
    }
`;

export const ItemsGrid = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
`;

// Single Grid Item (for home page)
export const ItemStyles = styled.div`
    position: relative;
    text-align: center;
    img {
        font-size: 0;
        height: auto;
    }
    p {
        font-size: 2rem;
        font-size: clamp(12px, 5vw, 20px);
        left: 0;
        margin: 0;
        position: absolute;
        top: 0;
        transform: rotate(-2deg) translateY(-10px);
        width: 100%;
    }
    .mark {
        display: inline;
    }
    @keyframes shine {
        from {
            background-position: 200%;
        }
        to {
            background-position: -40px;
        }
    }
    img.loading {
        --shine: white;
        --background: var(--grey);
        animation: shine 1s infinite linear;
        background-image: linear-gradient(
            90deg,
            var(--background) 0px,
            var(--shine) 40px,
            var(--background) 80px
        );
        background-size: 500px;
    }
`;