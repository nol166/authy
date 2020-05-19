/**
 * Checks if value is empty. Deep-checks arrays and objects
 * Note: isEmpty([]) == true, isEmpty({}) == true, isEmpty([{0:false},"",0]) == true, isEmpty({0:1}) == false
 * @param value
 * @returns {boolean}
 */
function isEmpty(value) {
    var isEmptyObject = function (a) {
        if (typeof a.length === 'undefined') {
            // it's an Object, not an Array
            var hasNonempty = Object.keys(a).some(function nonEmpty(element) {
                return !isEmpty(a[element])
            })
            return hasNonempty ? false : isEmptyObject(Object.keys(a))
        }

        return !a.some(function nonEmpty(element) {
            // check if array is really not empty as JS thinks
            return !isEmpty(element) // at least one element should be non-empty
        })
    }
    return (
        value == false ||
        typeof value === 'undefined' ||
        value == null ||
        (typeof value === 'object' && isEmptyObject(value))
    )
}

module.exports = isEmpty
