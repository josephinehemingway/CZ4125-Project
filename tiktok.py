# pip install TikTokApi Pandas
# pip install --upgrade TikTokApi    
# playwright install 
# pip install git+https://github.com/Daan-Grashoff/TikTok-Api


from TikTokApi import TikTokApi
import pandas as pd
#import prettify

 
api = TikTokApi()
vids = api.hashtag(name="Switzerland").videos(count=100)
count=0

#vids is an iterator
# print(type(vids))

# iterate through iterator
for trending_video in vids:
    print("----------")
<<<<<<< HEAD
    # COMMENTS
    # print(trending_video.comments())
    for comment in trending_video.comments():
         print(comment)

=======
    
>>>>>>> a8cae99 (Google itinerary function, still in progress)
    # DOWNLOAD ADDRESS
    #info = trending_video.info()
    #print(info['video']['downloadAddr'])

<<<<<<< HEAD
=======
    # COMMENTS
    #print(trending_video.comments())
    #for comment in trending_video.comments():
        #print(comment)
    
>>>>>>> a8cae99 (Google itinerary function, still in progress)
    # stats = trending_video.stats
    author = trending_video.author.username
    print(author)
    count = count +1


print(count)



