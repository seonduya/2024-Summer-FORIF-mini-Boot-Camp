function createBox() {
    const boxContainer = document.createElement('div');
    boxContainer.className = 'box-container';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'box';
    contentDiv.innerHTML = `
        <p>Sheepify States</p>
        <p>React, Typescript, MobX</p>
        <p>인기 있는 Sheepify 앱을 위해 귀여운 스타일로 빈 상태 화면을 디자인했습니다.</p>
        <p>노션링크</p>
        <p>깃허브링크</p>
    `;

    const imageDiv = document.createElement('div');
    imageDiv.className = 'box';
    imageDiv.innerHTML = `<p>/* 사진 */</p>`;

    boxContainer.appendChild(contentDiv);
    boxContainer.appendChild(imageDiv);

    return boxContainer;
}

const container = document.getElementById('container');
for (let i = 0; i < 3; i++) {
    container.appendChild(createBox());
}