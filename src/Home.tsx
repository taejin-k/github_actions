
const Home = () => {
    var handleButtonClick = () => {
        console.log('!! click')
    }

    return <>
        <div>제목</div>
        <p>내용</p>
        <div onClick={handleButtonClick}>수락 버튼</div>
    </>
}