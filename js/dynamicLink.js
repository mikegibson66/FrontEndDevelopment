class DynamicLink {


    dynamicLnk(links) {
        let finLink = '<ol>';

        for (let i = 0, max = links.length; i < max; i++) {
            finLink += '<li><a href="' + links[i].url + '">' + links[i].label + '</a></li>';
        }

        finLink += '</ol>';

        return finLink;
    };
}
export default DynamicLink;