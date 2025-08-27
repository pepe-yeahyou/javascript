document.getElementById('send').addEventListener('submit', function(e) {
    e.preventDefault(); // 폼 전송 막기

    const text = document.getElementById('letter').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'input.txt'; // 저장될 파일 이름
    a.click();

    URL.revokeObjectURL(url); // 메모리 정리
});