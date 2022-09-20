# pip install TikTokApi Pandas
# pip install --upgrade TikTokApi    
# playwright install 
# pip install git+https://github.com/Daan-Grashoff/TikTok-Api


from TikTokApi import TikTokApi
import pandas as pd
#import prettify

 
api = TikTokApi()
vids = api.hashtag(name="Switzerland").videos()

#vids is an iterator
# print(type(vids))

# iterate through iterator
for trending_video in vids:
    print("----------")
    # COMMENTS
    # print(trending_video.comments())
    # for comment in trending_video.comments():
    #     print(comment)

    # DOWNLOAD ADDRESS
    info = trending_video.info()
    print(info['video']['downloadAddr'])

    # stats = trending_video.stats
    # author = trending_video.author.username


