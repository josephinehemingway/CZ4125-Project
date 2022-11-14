from TikTokApi import TikTokApi
import pandas as pd
from textblob import TextBlob

api = TikTokApi()

count = 0

tiktokDict = {}
feature = ['author_Id','username','isVerified','followerCount','followingCount','heartCount','videoCount','desc','commentCount','diggCount','playCount','shareCount','duration','comments',
'posComments','negComments','neuComments','createTime','link']

for feat in feature:
    tiktokDict[feat] = []

for vid in api.hashtag(name = ["Switzerland","travel"]).videos(count = 50):
    info = vid.info()
    tiktokDict['author_Id'].append(info['author']['id'])
    tiktokDict['username'].append(info['author']['uniqueId'])
    tiktokDict['isVerified'].append(info['author']['verified'])

    tiktokDict['followerCount'].append(info['authorStats']['followerCount'])
    tiktokDict['followingCount'].append(info['authorStats']['followingCount'])
    tiktokDict['heartCount'].append(info['authorStats']['heartCount'])
    tiktokDict['videoCount'].append(info['authorStats']['videoCount'])

    tiktokDict['desc'].append(info['desc'])

    tiktokDict['commentCount'].append(info['stats']['commentCount'])
    tiktokDict['diggCount'].append(info['stats']['diggCount'])
    tiktokDict['playCount'].append(info['stats']['playCount'])
    tiktokDict['shareCount'].append(info['stats']['shareCount'])

    tiktokDict['duration'].append(info['video']['duration'])
    tiktokDict['createTime'].append(info['createTime'])

    lst = []
    pos = 0
    neu = 0
    neg = 0
    for cmt in vid.comments(count = 50):
        txt = cmt.text
        lst.append(txt)
        polar = TextBlob(txt).sentiment.polarity
        if polar > 0:
            pos +=1
        elif polar == 0:
            neu +=1
        else:
            neg +=1
    tiktokDict['comments'].append(lst)
    tiktokDict['posComments'].append(pos)
    tiktokDict['negComments'].append(neg)
    tiktokDict['neuComments'].append(neu)

    tiktokDict['link'].append(info['video']['downloadAddr'])

    count = count + 1

    print("Iteration %d done"%(count))

    if count == 50:
        break

df = pd.DataFrame(tiktokDict)
df.to_csv("test.csv")

print("Done")
