import client, { type BaseResponse } from "@/api/client"
import {type NoticeForm, type INotice, } from "@/types/notice.type";

export const noticeListRequest = async (): Promise<INotice[]> => {
    const { 
        data: { isSuccess, data, message }
    } = await client.get<BaseResponse<INotice[]>>("/notice");
    if (!isSuccess) throw new Error(message)
    return data;
}

export const getNoticeDetail = async (noticeId: string) => {
    const {
        data: {isSuccess, data, message}
    } = await client.get<BaseResponse<NoticeForm>>(`/notice/${noticeId}`);
    if (!isSuccess) throw new Error(message)
    return data;
}

export const noticeCreate = async (notice: NoticeForm): Promise<void> => {
    const { 
        data: {isSuccess, message}
    } = await client.post<BaseResponse<void>>("/notice", notice);
    if (!isSuccess) throw new Error(message)
}

export const noticeUpdate = async (noticeId: string, notice: NoticeForm ): Promise<void> => {
    const {
        data: {isSuccess, message}
    } = await client.put<BaseResponse<void>>(`/notice/${noticeId}`, notice);
    if (!isSuccess) throw new Error(message)
}

export const noticeDelete = async (noticeId: string): Promise<void> => {
    const {
        data: {isSuccess, message}
    } = await client.delete<BaseResponse<void>>(`/notice/${noticeId}`);
    if (!isSuccess) throw new Error(message)
}

export const searchNoticeByKeyword = async (searchKeyword: string): Promise<INotice[]> => {
    const {
        data: { isSuccess, data, message }
    } = await client.get<BaseResponse<INotice[]>>(`/notice/search?keyword=${searchKeyword}`);
    if (!isSuccess) throw new Error(message)
    return data;
}

