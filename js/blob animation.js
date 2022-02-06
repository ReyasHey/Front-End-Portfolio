function animateBlob() {
    const tween1 = KUTE.fromTo(
        '#blob1',
        { path: '#blob1' },
        { path: '#blob2' },
        { duration: 1000, easing: 'ease-out' }
    );

    const tween2 = KUTE.fromTo(
        '#blob1',
        { path: '#blob2' },
        { path: '#blob3' },
        { duration: 1000, easing: 'ease-out' }
    );

    const tween3 = KUTE.fromTo(
        '#blob1',
        { path: '#blob3' },
        { path: '#blob1' },
        { duration: 1000, easing: 'ease-out' }
    )

    tween1.chain(tween2);
    tween2.chain(tween3);
    tween3.chain(tween1);
    tween1.start();
};
