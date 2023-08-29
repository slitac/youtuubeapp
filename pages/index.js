import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600">
          Download high-quality thumbnails from YouTube videos.
        </p>
      </header>
      <div className="youtumbBox">
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />

        
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
        </div>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="home-container">
      <div className="content">
<h1>Welcome to YouTube Thumbnail Grabber!</h1>
        <p> Discover the most user-friendly and efficient way to fetch high-quality thumbnails
           from any YouTube video instantly. Whether you're a content creator, a marketer, 
           or just someone who loves YouTube, our tool offers an impeccable solution to get that perfect 
           snapshot from your favorite videos.</p>
           <h1> Why Use YouTube Thumbnail Grabber?</h1>
           <ul>
            <li><strong>High-Quality Thumbnails:</strong> Extract crisp and high-definition thumbnails directly from the source.</li>
            <li><strong>Fast and Efficient:</strong> Why wait when you can get your thumbnail in mere seconds? Our platform ensures quick results every time.</li>
            <li><strong>Safe and Secure:</strong> We respect user privacy. Fetching thumbnails with our service means no data compromise.</li>
            <li><strong>User-Friendly Interface:</strong> Simply paste the YouTube video URL and let our system do the magic. No complicated procedures!</li>
            <li><strong>Free to Use:</strong> Grabbing your desired thumbnail shouldn't come at a cost. Use our service for free anytime.</li>
        </ul>
        <h1>Frequently Asked Questions:</h1>
        <dl>
            <dt>How to use YouTube Thumbnail Grabber?</dt>
            <dd>Just enter the URL of the YouTube video you wish to extract the thumbnail from, and we'll provide you with the image in seconds.</dd>

            <dt>Are there any limits to how many thumbnails I can grab?</dt>
            <dd>No, enjoy unlimited access to our tool and fetch as many thumbnails as you need.</dd>

            <dt>Does this tool support videos of any length?</dt>
            <dd>Yes, from short clips to full-length movies, grab thumbnails from any YouTube video of any duration.</dd>
        </dl>
           


      </div>
      </div>
    </div>
  );
};



export default Index;
