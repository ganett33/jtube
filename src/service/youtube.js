class Youtube {
    constructor (key) {
        this.key = key;
        this.getReqeustOptions = {
            method: 'GET',
            redirect: 'follow',
        };
    }

    async mostPopular() {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getReqeustOptions
        );
        const result = await response.json();
        return result.items;
        
    }

    async serach(query) {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getReqeustOptions
        );
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
        }
    }

export default Youtube;