# pip install TikTokApi Pandas
# pip install --upgrade TikTokApi    
# playwright install 
# pip install git+https://github.com/Daan-Grashoff/TikTok-Api

from TikTokApi import TikTokApi
import pandas as pd
 
api = TikTokApi()
vids = api.hashtag(name="Switzerland").videos(count=100)
count=0

# iterate through iterator
for trending_video in vids:
    print("----------")
    
    # DOWNLOAD ADDRESS
    #info = trending_video.info()
    #print(info['video']['downloadAddr'])

    # COMMENTS
    #print(trending_video.comments())
    #for comment in trending_video.comments():
        #print(comment)
    
    # stats = trending_video.stats
    author = trending_video.author.username
    print(author)
    count = count +1


print(count)



