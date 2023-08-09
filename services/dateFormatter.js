const parseDate = (dateString) => new Date(Date.parse(dateString));

const getDay = (dateString) => parseDate(dateString).toLocaleDateString();

const getTime = (dateString) => parseDate(dateString).toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute:'2-digit'
});

export {
    getDay,
    getTime
}