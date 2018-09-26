suite('"About" Page Tests', () => {
    test('page should contain link to concat page', () => {
        assert($('a[href = "/concat"]').length);
    })
})