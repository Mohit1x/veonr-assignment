document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '9999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    });

    const modal = document.createElement('div');
    Object.assign(modal.style, {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    });
    modal.innerText = 'Hello World!';

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    //if want to close the model by clicking on model can uncomment the following line of code
    // overlay.addEventListener('click', () => document.body.removeChild(overlay));
});